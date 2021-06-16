import React from "react";
import { CardPage } from "./pages/card-page/card-page";
import { ContactPage } from "./pages/contact-page/contact-page";
import { OrderPage } from "./pages/order-page/order-page";
import { ProductDetail } from "./pages/product-detail-page/product-detail";
import { ProductPage } from "./pages/products-page/products-page";
import { FilterPage } from "./pages/filter-page/filter-page";
import { OrderSuccess } from "./pages/order-success-page/order-success";
// import { ProductPage } from "./pages/products-page/products-page";

export const routes = [
  {
    path: "/",
    exact: true,
    component: ProductPage,
  },
  {
    path: "/contact",
    exact: true,
    component: ContactPage,
  },
  {
    path: "/filter",
    exact: true,
    component: FilterPage,
  },
  {
    path: "/card",
    exact: true,
    component: CardPage,
  },
  {
    path: "/order",
    exact: true,
    component: OrderPage,
  },
  {
    path: "/product/:id",
    exact: true,
    component: ProductDetail,
  },
  {
    path: "/order-success",
    exact: true,
    component: OrderSuccess,
  },
];
