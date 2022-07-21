import React, { useState, useEffect } from "react";
import Item from "./Item.js";
import useFetch from "./useFetch.js";
import styled from 'styled-components';

const ShopList = styled.ul`
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`

const ItemList = styled.li`
  margin-bottom: 80px;
`

export default function Shop() {

    const [items, setItems] = useState([]);
    const { get, post, loader } = useFetch();

    useEffect(() => {
        get("https://covid-shop-mcs.herokuapp.com/")
            .then((data) => {
                setItems(data);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <ShopList className="shop">
            {loader && <p>Загрузка товаров...</p>}
            {items.map((item) => (
                <Item key={item.id} info={item} />
            ))}
        </ShopList>
    );
}