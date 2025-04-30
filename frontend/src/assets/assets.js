 import placeholder from "./placeholder_image.png"
 import logo from "./placeholder_logo.png"
 import search_icon from "./search_icon.png"
 import user_icon from "./user_icon.png"
 import cart_icon from "./cart_icon.png"
 import menu_icon from "./menu_icon.png"
 import back_icon from "./back_icon.png"
 import dropdown_icon from "./dropdown_icon.png"
 import close_icon from "./close_icon.png"
 import filled_star from "./filled_star.png"
 import empty_star from "./empty_star.png"
 
 export const assets = {
    placeholder,
    logo,
    search_icon,
    user_icon,
    cart_icon,
    menu_icon,
    back_icon,
    dropdown_icon,
    close_icon,
    filled_star,
    empty_star
 }

 export const products = [
    {
        _id: "aaaaa",
        name: "Test Product 1",
        description: "This is a test description for product 1. This is a test description for product 1. This is a test description for product 1. ",
        price: 140,
        image: [placeholder, placeholder, placeholder, placeholder],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 412396783241,
        bestseller: true
    },
    
    {
      _id: "aaaab",
      name: "Test Product 2",
      description: "This is a test description for product 2. ",
      price: 90,
      image: [placeholder, placeholder, placeholder, placeholder],
      category: "Men",
      subCategory: "Bottomwear",
      sizes: ["S", "M", "L"],
      date: 412396783241,
      bestseller: true
  },
    
  {
    _id: "aaaac",
    name: "Test Product 3",
    description: "This is a test description for product 3. ",
    price: 143,
    image: [placeholder, placeholder, placeholder, placeholder],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    date: 412396783241,
    bestseller: true
},
    
{
  _id: "aaaad",
  name: "Test Product 4",
  description: "This is a test description for product 4. ",
  price: 105,
  image: [placeholder, placeholder, placeholder, placeholder],
  category: "Women",
  subCategory: "Topwear",
  sizes: ["S", "M", "L"],
  date: 412396783241,
  bestseller: true
},
    
{
  _id: "aaaae",
  name: "Different Product 1",
  description: "This is a test description for different product 1. ",
  price: 56,
  image: [placeholder, placeholder, placeholder, placeholder],
  category: "Women",
  subCategory: "Winterwear",
  sizes: ["S", "M", "L"],
  date: 412396783241,
  bestseller: true
},
    
{
  _id: "aaaaf",
  name: "Different Product 2",
  description: "This is a test description for different product 2. ",
  price: 100,
  image: [placeholder, placeholder, placeholder, placeholder],
  category: "Kids",
  subCategory: "Topwear",
  sizes: ["S", "M", "L"],
  date: 412396783241,
  bestseller: true
},
    
{
  _id: "aaaag",
  name: "Different Product 3",
  description: "This is a test description for different product 3. ",
  price: 100,
  image: [placeholder, placeholder, placeholder, placeholder],
  category: "Kids",
  subCategory: "Bottomwear",
  sizes: ["XS", "S", "M"],
  date: 412396783241,
  bestseller: true
}
 ]