import { v4 as uuid } from 'uuid';

export const products = [
  {
    _id: '555d77a1-54e0-409f-8c32-e56773591a85',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171238/f1_o1a1lf.jpg',
    alt: '',
    productTitle: 'adidas',
    productDesc: 'Cartoon Astronant T-Shirts',
    price: 800,
    isFeatured: true,
    rating: 5,
    categories: 't-shirt',
    latest: true,
    detail:
      'Care Instructions: Hand Wash Only Fit Type: Regular Fit Closure Type : Button; Collar Style Breathable : Truly comfortable and easy to wear in every season.',
  },
  {
    _id: 'abcfccb9-a7e8-44bf-9a3e-ed129f42e465',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171238/f2_zklymn.jpg',
    alt: '',
    productTitle: 'Zara',
    productDesc: 'Leaf Print Slim  T-Shirts',
    price: 800,
    isFeatured: true,
    rating: 4,
    categories: 't-shirt',
    latest: false,
    detail:
      'Care Instructions: Hand Wash Only Fit Type: Regular Fit Relaxed fit beach shirt made of lightweight and soft fabric, give you comfortable and nature skin feel, button down shirt with one left pocket.',
  },
  {
    _id: 'a1a56a20-1edc-434a-8de2-a580d42f5774',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171238/f3_qtsmve.jpg',
    alt: '',
    productTitle: 'Allen Solly',
    productDesc: 'Printed Slim Fit T-Shirts',
    price: 600,
    isFeatured: true,
    rating: 5,
    categories: 't-shirt',
    latest: true,
    detail:
      'Care Instructions: Dry Clean Only Fit Type: Slim Fit Style - Enhance your look by wearing this Casual Stylish Mens shirt comfortable and nature skin feel, button down shirt with one left pocket',
  },
  {
    _id: 'e5650196-bda3-4c0a-aea1-3e03e40765e0',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171239/f4_jywe6v.jpg',
    alt: '',
    productTitle: 'H&M',
    productDesc: 'Floral Print Slim T-Shirts',
    price: 650,
    isFeatured: true,
    rating: 5,
    categories: 't-shirt',
    latest: false,
    detail:
      'Care Instructions: Hand Wash Only Fit Type: Regular:- Rayon Stylish Shirt || Print:- Tropical Printed Shirt For Boy || Package Contain:- 1 Casual Shirt For Men.',
  },
  {
    _id: '2bdc4a77-d273-4130-b093-7cc88fc455fb',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171238/f5_xjwvr0.jpg',
    alt: '',
    productTitle: 'Allen Solly',
    productDesc: 'Graphic Print Boxy T-Shirts',
    price: 799,
    isFeatured: true,
    rating: 2,
    categories: 't-shirt',
    latest: true,
    detail:
      'Care Instructions: Dry Clean Only Fit Type: Slim Fit Dry Clean Only Style - Enhance your look by wearing this Casual Stylish Men shirt Casual Shirt For Men.',
  },
  {
    _id: '677071a2-533d-44a6-bbea-c696d20c0819',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171239/f6_qtz6tu.jpg',
    alt: '',
    productTitle: 'H&M',
    productDesc: 'CaSlim Fit Hooded Jacket',
    price: 599,
    isFeatured: true,
    rating: 5,
    categories: 'mens',
    latest: false,
    detail:
      'Care Instructions: Hand Wash Only Fit Type: Regular Fit Fabric:- Rayon Stylish Shirt || Print:- Tropical Printed Shirt For Boy || Package Contain:- 1 Casual Shirt For Men.',
  },
  {
    _id: 'f700c5d7-cdfe-420a-9cce-e9a96c54a162',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171239/n8_e63qb8.jpg',
    alt: '',
    productTitle: 'Zara',
    productDesc: ' Full-Sleeves Spread-Collar ',
    price: 1999,
    isFeatured: true,
    rating: 4,
    categories: 'mens',
    latest: true,
    detail:
      'Care Instructions: Hand Wash Only Fit Type: Regular Fit Shirts Fabric:- Soft Rayon || Color :- Multi || Pattern:- Fancy Multi Printed Shirt || Fit Type:- Regular Fit ||',
  },
  {
    _id: '0401804e-f867-4327-a85c-c04453114e6a',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171238/n2_fndph9.jpg',
    alt: '',
    productTitle: 'adidas',
    productDesc: 'Checked Slim Fit Shirt ',
    price: 877,
    isFeatured: true,
    rating: 3,
    categories: 'mens',
    latest: false,
    detail:
      'Care Instructions: Machine Wash Fit Type: Relaxed Fit Fits True to Size And Regular Fit Style Make You Feel Good and Conformtable When Wearing',
  },
  {
    _id: 'c81c4c53-252e-4813-8a22-9b965a849a36',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171237/n1_ielk1c.jpg',
    alt: '',
    productTitle: 'Allen Solly',
    productDesc: 'Spread Collar Shirt',
    price: 750,
    isFeatured: false,
    rating: 4,
    categories: 'mens',
    latest: true,
    detail:
      'Care Instructions: Machine Wash Fit Type: Regular Fit Fabric - Cotton, Pre-Washed for extremely soft finish and No Shrinkage Post Washing',
  },
  {
    _id: 'f9b57f35-1479-4207-b290-c1dbbf93234c',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171237/n4_jr9zbb.jpg',
    alt: '',
    productTitle: 'Zara',
    productDesc: 'Heathered Slim Fit  T-Shirts',
    price: 450,
    isFeatured: false,
    rating: 5,
    categories: 'mens',
    latest: false,
    detail:
      'Care Instructions: Machine Wash Fit Type: Slim Fit Material-100%Superfine Cotton/Pure Cotton,Fit-Slim Fit,Pattern-Checkered,,Collar-Cutaway,Pocket-one',
  },
  {
    _id: 'ed128f2a-ab7b-44ff-8dd5-dce61c2ef680',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171237/n7_ojcoze.jpg',
    alt: '',
    productTitle: 'adidas',
    productDesc: 'Cotton Shirt with Patch',
    price: 999,
    isFeatured: false,
    rating: 5,
    categories: 'mens',
    latest: true,
    detail:
      'Care Instructions: Machine Wash Fit Type: Regular Fit Fabric - Cotton, Pre-Washed for extremely soft finish and No Shrinkage Post Washing',
  },
  {
    _id: 'ed8cf6c8-2abd-41f2-bffe-3a77407e5af6',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171237/n5_o3thee.jpg',
    alt: '',
    productTitle: 'Allen Solly',
    productDesc: 'Shirt with Patch Pocket',
    price: 899,
    isFeatured: false,
    rating: 3,
    categories: 'mens',
    latest: false,
    detail:
      'Care Instructions: Machine Wash Fit Type: Slim Fit Plaid Checks Pattern - Our shirt features a timeless plaid checks pattern that adds a touch of elegance and sophistication to your wardrobe.',
  },
  {
    _id: '62bf991b-d600-4478-9b72-92e82b6ae8d3',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171238/n2_fndph9.jpg',
    alt: '',
    productTitle: 'Zara',
    productDesc: 'Micro Print Slim Fit Shirt',
    price: 650,
    isFeatured: false,
    rating: 3,
    categories: 'mens',
    latest: true,
    detail:
      'Care Instructions: Hand Wash Only Fit Type: Regular Fit Fabric:- Rayon Stylish Shirt || Print:- Hawaii Surf Beach Plam Tree Printed Shirt For Boy || Package Contain:- 1 Casual Shirt For Men.',
  },
  {
    _id: '3b2d5e45-5a1f-46ec-9fe4-9cba4d76f92c',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171238/n6_ntv8nu.jpg',
    alt: '',
    productTitle: 'adidas',
    productDesc: 'Cargo Shorts with Pockets',
    price: 550,
    isFeatured: false,
    rating: 4,
    categories: 'pants',
    latest: false,
    detail:
      '3/4 shorts for men cotton are made of 100% Cotton; Half pants for men cotton have elastic waist with button. Mens Shorts Casual have Cargo shorts for men stylish Multi-Utility Pockets',
  },
  {
    _id: 'b1d38649-7400-4ef6-8c16-48548a7d099f',
    imgUrl:
      'https://res.cloudinary.com/ddlpde95c/image/upload/v1671171238/f8_jfxjo8.jpg',
    alt: '',
    productTitle: 'Allen Solly',
    productDesc: 'Ombre-Dyed Flared Dress',
    price: 790,
    isFeatured: false,
    rating: 5,
    categories: 'women',
    latest: true,
    detail:
      'Care Instructions: Hand Wash Only Fit Type: Slim Fabric: 100% Polyester | Wash Care: Hand Wash with Warm Water, wash dark colors separately,',
  },
];
