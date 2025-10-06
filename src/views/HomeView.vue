<script setup lang="ts">
import api from "../services/api";
import type { AxiosResponse } from "axios";
import type { ShowData } from "../tyoes/interfaces";

const showsData: ShowData[] = [];

const fetchShowData = async () => {
  try {
    // const response = await api.get("/");
    const response: ShowData[] = [
      {
        id: 1,
        name: "Example Show",
      },
    ];

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
</script>

<template>
  <div v-for="(show, index) in showsData" :key="index">
    <h2>{{ show.title }}</h2>
  </div>
</template>
