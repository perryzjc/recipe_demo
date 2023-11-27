import { useState } from "react";
import getContents from "../utils/getContent"

let data = [];

const loadData = async () => {
    try {
        data = await getContents();
    } catch (error) {
        console.error('Error loading data:', error);
        data = []; // or handle the error as you see fit
    }
};

const getData = () => data;

export { loadData, getData };
