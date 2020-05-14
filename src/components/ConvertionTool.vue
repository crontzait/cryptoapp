<template>
  <el-col :span="15">
    <h3>Conversion tool</h3>

    <div class="btn-ribbon">
      <el-autocomplete
        class="inline-input"
        v-model="baseCoin"
        :fetch-suggestions="querySearchBase"
        placeholder="Base coin"
        @select="handleSelectedBaseCoin"
      >
        <i class="el-icon-coin el-input__icon" slot="suffix"></i>
        <template slot-scope="{ item }">
          <div class="value">{{ item.value }}</div>
        </template>
      </el-autocomplete>

      <el-autocomplete
        v-model="targetCoin"
        :fetch-suggestions="querySearchTarget"
        placeholder="Target coin"
        @select="handleSelectedTargetCoin"
      >
        <i class="el-icon-coin el-input__icon" slot="suffix"></i>
        <template slot-scope="{ item }">
          <div class="value">{{ item.value }}</div>
        </template>
      </el-autocomplete>

      <el-button @click="handleConversions" type="primary" plain>Convert</el-button>
    </div>
    <div class="btn-ribbon">
      <el-input placeholder="Base value" v-model="baseValue"></el-input>
      <el-input disabled placeholder="Result" v-model="targetValue"></el-input>
    </div>
  </el-col>
</template>

<script>
import Axios from "axios";

export default {
  name: "conversion-tool",

  data() {
    return {
      baseCoin: "",
      baseValue: "",
      targetCoin: "",
      targetValue: "",
      baseCoinOptions: [
        { value: "BTC", code: "bitcoin" },
        { value: "ETH", code: "ethereum" },
        { value: "XRP", code: "ripple" },
        { value: "Kraken", code: "kraken" },
        { value: "LIBRA", code: "libra" }
      ],
      targetCoinOptions: [],
      isValid: false,
      disabled: true
    };
  },
  async mounted() {
    const response = await Axios.get(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
    );
    this.targetCoinOptions = response.data.map(item => ({ value: item }));
  },

  methods: {
    querySearchBase(queryString, cb) {
      let codes = this.baseCoinOptions;
      let results = queryString
        ? codes.filter(item => item.value.toLowerCase().includes(queryString))
        : codes;
      cb(results);
    },

    querySearchTarget(queryString, cb) {
      let codes = this.targetCoinOptions;
      let results = queryString
        ? codes.filter(item => item.value.includes(queryString))
        : codes;
      cb(results);
    },

    handleSelectedBaseCoin(item) {
      if (this.baseCoin !== "") this.baseCoin = item.code;
    },
    handleSelectedTargetCoin(item) {
      this.targetCoin = item.value;
    },
    async handleConversions() {
      if (this.targetCoin === "" || this.baseCoin === "") {
        this.$message.error("Base or target coin cannot be empty");
      } else if (this.baseValue === "") {
        //de verificat sa fie number
        this.$message.error("Base coin cannot be empty");
      } else {
        const response = await Axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${this.baseCoin}&vs_currencies=${this.targetCoin}`
        );
        console.log(response.data[this.baseCoin][this.targetCoin]);
        this.targetValue =
          this.baseValue * response.data[this.baseCoin][this.targetCoin];
      }
    }
  }
};
</script>

<style scoped>
.btn-ribbon {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 5%;
  padding-left: 20px;
}

.btn-ribbon .el-input {
  width: auto;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.expand-fade-leave-active {
  margin-left: 20px;
  opacity: 0;
}
</style>