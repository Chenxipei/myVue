<template>
  <div class="film">
    <filmList title="即将上映的电影-北京">
      <div class="fimlBox" slot="box">
          <div class="filmCon" v-for="(item,index) in recommend_one" :key="index">
            <img :src="item.cover_url" alt />
            <p class="name">{{item.title}}</p>
            <span class="score">评分：{{item.score}}</span>
          </div>
      </div>
    </filmList>
      <filmList title="即将上映的电影">
      <div class="fimlBox" slot="box">
          <div class="filmCon" v-for="(item,index) in recommend_two" :key="index">
            <img :src="item.cover_url" alt />
            <p class="name">{{item.title}}</p>
            <span class="score">评分：{{item.score}}</span>
          </div>
      </div>
    </filmList>
  </div>
</template>

<script>
import filmList from "../../components/FilmList";
export default {
  name: "film",
  components: {
    filmList
  },
  data() {
    return {
      recommend_one: [],
      recommend_two:[]
    };
  },
  mounted() {
    this.getFilmDatd();
  },
  methods: {
    getFilmDatd() {
      this.$axios
        .get("/data/broadcast.json")
        .then(res => {
          console.log(res.data.recommend_one);
          this.recommend_one =res.data.recommend_one;
          this.recommend_two =res.data.recommend_two
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less">
</style>