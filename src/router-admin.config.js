import { ProductAdmin } from "./modules-admin/product-admin/product-admin";
import { CategoryAdmin } from "./modules-admin/category-admin/category-admin";
import { ProductAdd } from "./modules-admin/product-add/product-add";
import { ProductEdit } from "./modules-admin/product-edit/product-edit";

export const routesAdmin = [
  {
    path: "",
    exact: true,
    component: ProductAdmin,
  },
  {
    path: "category",
    component: CategoryAdmin,
  },
  {
    path: "product-add",
    component: ProductAdd,
  },
  {
    path: "product-edit",
    component: ProductEdit,
  },
];
