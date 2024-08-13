import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, ImageBackground, Button, ScrollView,TouchableOpacity } from 'react-native';
import styles from '../styles/styles';
import Catagory from '../components/Catagory';
import { useProduct } from '../components/reducerContext';  // Import the useProduct hook
import Icon from 'react-native-vector-icons/AntDesign';

const Product = ({ catagory }) => {
  const { state, dispatch } = useProduct();  // Use the product context
  const favorites = state.favorite;
  
 
 const items = {
  TrendingNow:[
  { id: '1', title: "af1", price: "$86", image: "https://img.buzzfeed.com/buzzfeed-static/complex/images/Y19jcm9wLGhfMTExNyx3XzE5ODYseF8xNCx5XzU3Mg==/bdaantdj5y6pgurjo4ku/nocta-nike-air-force-1-low-cz8065-100-pair.jpg?downsize=1840:*&output-format=auto&output-quality=auto" },
    { id: '2', title: "nike X tiffany", price: "$400", image: "https://culted.com/wp-content/uploads/2023/01/HEADER-@sneakernews-1-1920x1280.png" },
    { id: '3', title: "air jordan", price: "$103", image: "https://images-cdn.ubuy.co.in/634d139d183a133e4d32eaea-nike-air-jordan-1-high-og-unc-university.jpg" },
    { id: '4', title: "aplhaboost", price: "$150", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a804e729600440808f86af0e0115e823_9366/Alphaboost_V1_Shoes_White_HP2757_01_standard.jpg" },
    { id: '5', title: "adi superstar", price: "$113", image: "https://images-cdn.ubuy.co.in/636c137bc797d31cf35bc843-adidas-superstar-men-039-s-size.jpg" },
      { id: '6', title: "adisuperstar", price: "$113", image: "https://images-cdn.ubuy.co.in/636c137bc797d31cf35bc843-adidas-superstar-men-039-s-size.jpg" },
      { id: '7', title: "adidas NMDS1 ", price: "$105", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d28ac0bc3ee4bf69526ac80152bc6f9_9366/NMD_S1_MAHBS_Shoes_Brown_ID4807_01_standard.jpg" },
       { id: '8', title: "nike G.P", price: "$167", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c55955fa-237f-45df-99fb-96339dd448d4/M+ZOOM+GP+CHALLENGE+1+HC+OLY.png" },
        { id: '9', title: "nike DunkLow", price: "$113", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ff6bde9-caad-444e-bd21-ee49b126fd85/NIKE+DUNK+LOW+RETRO.png" },
        { id: '10', title: "adidas UltraBoost", price: "$110", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d46e6697bc1b4ba6974154a9970b509e_9366/ULTRABOOST_1.0_SHOES_Grey_ID5877_01_standard.jpgs" },
        { id: '11', title: "adidas Airstride", price: "$83", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8f6b182697d94461a69c963377e349e0_9366/AirStride_Burgundy_IU6382_01_standard.jpg" },
        { id: '12', title: "adidasXBape", price: "$203", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b98fb15348864f74ab1a771599e6bdd0_9366/BAPE_x_adidas_Stan_Smith_Shoes_Black_IG1116_01_standard.jpg" },
         { id: '13', title: "nike AirForce", price: "$88", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f094af40-f82f-4fb9-a246-e031bf6fc411/WMNS+AIR+FORCE+1+%2707.png" },
          { id: '14', title: "nike CourtLegacy", price: "$115", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9010de16-f136-48eb-bcb4-2d8acf1f5a70/WMNS+NIKE+COURT+LEGACY+CNVS.png" },
  ],
  Men:[
  { id: '1', title: "af1", price: "$86", image: "https://rukminim2.flixcart.com/image/750/900/xif0q/shoe/x/a/6/8-dvince-07-42-sneaker-black-original-imagfh39dckeqdsw.jpeg?q=20&crop=false" },
    { id: '2', title: "nike X tiffany", price: "$400", image: "https://culted.com/wp-content/uploads/2023/01/HEADER-@sneakernews-1-1920x1280.png" },
    { id: '3', title: "air jordan", price: "$103", image: "https://rukminim2.flixcart.com/image/850/1000/kz065jk0/shoe/q/t/d/9-wk-120-casual-woakers-red-original-imagb3ycyshf94s4.jpeg?q=20&crop=false" },
    { id: '4', title: "aplhaboost", price: "$150", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a804e729600440808f86af0e0115e823_9366/Alphaboost_V1_Shoes_White_HP2757_01_standard.jpg" },
    { id: '5', title: "adi superstar", price: "$113", image: "https://images-cdn.ubuy.co.in/636c137bc797d31cf35bc843-adidas-superstar-men-039-s-size.jpg" },
      { id: '6', title: "adi superstar", price: "$113", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzbAUiYQPLA6tUFVruetMlCtGYBrUntZvZg&s" },
      { id: '7', title: "adidas Handball", price: "$119", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/82d433384c7c435f9a2fa96d0101d323_9366/Handball_Spezial_Shoes_Blue_BD7633_01_standard.jpg" },
      { id: '8', title: "adidas YZY", price: "$265", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/81377324920741e598796bf52aeecd30_9366/YZY_350_V2_CMPCT_White_IG9608_01_standard1_hover.jpg" },
      { id: '9', title: "adidas UltraBoost", price: "$110", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d46e6697bc1b4ba6974154a9970b509e_9366/ULTRABOOST_1.0_SHOES_Grey_ID5877_01_standard.jpgs" },
      { id: '10', title: "adidasXBape", price: "$203", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b98fb15348864f74ab1a771599e6bdd0_9366/BAPE_x_adidas_Stan_Smith_Shoes_Black_IG1116_01_standard.jpg" },
      { id: '11', title: "adidas SambaOG", price: "$125", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e31a9c578a34784aba4467574c4a7f9_9366/Samba_OG_Shoes_White_IG1826_01_standard.jpg" },
      { id: '12', title: "adidas NMDS1 ", price: "$105", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d28ac0bc3ee4bf69526ac80152bc6f9_9366/NMD_S1_MAHBS_Shoes_Brown_ID4807_01_standard.jpg" },
      { id: '13', title: "nike VaporMax", price: "$107", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/98aead6e-88f7-4d0f-9f55-9fb0708ce078/AIR+VAPORMAX+2023+FK+SE.png" },
      { id: '14', title: "nike G.T Jump", price: "$215", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/837782ce-cb6c-479d-9622-6663c40085ac/NIKE+AIR+ZOOM+G.T.+JUMP+2+OLY.png" },
      { id: '15', title: "nike G.P", price: "$167", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c55955fa-237f-45df-99fb-96339dd448d4/M+ZOOM+GP+CHALLENGE+1+HC+OLY.png" },
      { id: '16', title: "nike Jorda90", price: "$149", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9417c304-a873-4e2b-b8a1-d476be3d7a0c/JORDAN+STADIUM+90.png" },
      { id: '17', title: "nike DunkLow", price: "$113", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ff6bde9-caad-444e-bd21-ee49b126fd85/NIKE+DUNK+LOW+RETRO.png" },
      { id: '18', title: "nike Pegasus", price: "$145", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f3b0bbe-643d-411b-a377-ed0ee9dd40b0/NIKE+REACTX+PEGASUS+TRAIL+5.png" },
  ],
 
 
 Women:[
  { id: '1', title: "af1", price: "$86", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/t/3/n/3-875-mlt-3-deals4you-multi-original-imagg27xn9hnxw6h.jpeg?q=90&crop=false" },
    { id: '2', title: "nike X tiffany", price: "$400", image: "https://images.meesho.com/images/products/266269452/lj1ut_512.webp" },
    { id: '3', title: "air jordan", price: "$103", image: "https://m.media-amazon.com/images/I/61bD2Aqng9L.AC_UY1000.jpg" },
    { id: '4', title: "aplhaboost", price: "$150", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a804e729600440808f86af0e0115e823_9366/Alphaboost_V1_Shoes_White_HP2757_01_standard.jpg" },
    { id: '5', title: "superstar", price: "$113", image: "https://images-cdn.ubuy.co.in/636c137bc797d31cf35bc843-adidas-superstar-men-039-s-size.jpg" },
      { id: '6', title: "superstar", price: "$113", image: "https://images-cdn.ubuy.co.in/636c137bc797d31cf35bc843-adidas-superstar-men-039-s-size.jpg" },
      { id: '7', title: "adidas CourtJam", price: "$80", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9caa4308b66c4fff9a3000d073cf03d7_9366/CourtJam_Control_3_Tennis_Shoes_White_ID2457_01_standard.jpg" },
      { id: '8', title: "adidas Airstride", price: "$83", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8f6b182697d94461a69c963377e349e0_9366/AirStride_Burgundy_IU6382_01_standard.jpg" },
      { id: '9', title: "adidas Genwalk-W", price: "$72", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e77ab2a0b7824946a7f4cc5c4f80e420_9366/GenWalk_W_Pink_IU9557_01_standard.jpg" },
      { id: '10', title: "adidas SuperNova", price: "$83", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/780e166ab6e4403a977804ede9cb88af_9366/Supernova_Stride_Running_Shoes_Green_IG8283_HM1.jpg" },
      { id: '11', title: "adidas NMD-R1", price: "$75", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0912404251464d26945aaf9c00c01697_9366/NMD_R1_Shoes_Burgundy_HP2822_01_standard.jpg" },
      { id: '12', title: "adidas Stabil", price: "$87", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fd25a3ede40241f792317de717b4e0cd_9366/Stabil_Next_Gen_Handball_Shoes_White_IG3402_HM1.jpg" },
      { id: '13', title: "nike JAM", price: "$95", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf0dbaa6-584e-4f79-bed0-fac26a119368/NIKE+JAM.png" },
      { id: '14', title: "nike JAM1", price: "$92", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79aa9961-2f59-414c-8b46-f713d88e3722/NIKE+JAM.png" },
      { id: '15', title: "nike AirForce", price: "$88", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f094af40-f82f-4fb9-a246-e031bf6fc411/WMNS+AIR+FORCE+1+%2707.png" },
      { id: '16', title: "nike BlazerLow", price: "$80", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02f3d37f-a63a-43a5-ac3a-01b2ebd4557a/W+BLAZER+LOW+%2777.png" },
      { id: '17', title: "nike BlazerMid", price: "$85", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png" },
      { id: '18', title: "nike CourtLegacy", price: "$115", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9010de16-f136-48eb-bcb4-2d8acf1f5a70/WMNS+NIKE+COURT+LEGACY+CNVS.png" },
  ],
  Kids:[
    { id: '1', title: "af1", price: "$86", image: "https://i.pinimg.com/736x/cf/b4/ce/cfb4ceba09569895747c64b9f479115c.jpg" },
    { id: '2', title: "nike X tiffany", price: "$400", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGJtqe54dcsk_k6_kD3XL3OIhQmOKB2boUA24Ibh3aDyV9j-auOy9lcjYxQNDBgNLong&usqp=CAU"},
    { id: '3', title: "air jordan", price: "$103", image: "https://m.media-amazon.com/images/I/816sdLkSkeL.AC_UY1000.jpg" },
    { id: '4', title: "aplhaboost", price: "$150", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a804e729600440808f86af0e0115e823_9366/Alphaboost_V1_Shoes_White_HP2757_01_standard.jpg" },
    { id: '5', title: "adisuperstar", price: "$113", image: "https://images-cdn.ubuy.co.in/636c137bc797d31cf35bc843-adidas-superstar-men-039-s-size.jpg" },
      { id: '6', title: "adisuperstar", price: "$113", image: "https://images-cdn.ubuy.co.in/636c137bc797d31cf35bc843-adidas-superstar-men-039-s-size.jpg" },
      { id: '7', title: "adidas gazelle", price: "$67", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cde23f9d34b0496ebea6347e4f2565f4_9366/Gazelle_Shoes_Kids_Green_IE8674_01_standard.jpg" },
      { id: '8', title: "adidas samba", price: "$70", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c67fe1e42d914f58945caeadf84f6d33_9366/Samba_OG_Shoes_Kids_Black_IE3678_01_standard.jpg" },
      { id: '9', title: "adidas Stansmith", price: "$60", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e96d7c5d92743c591e2ac0800cba69a_9366/Stan_Smith_Shoes_White_FX7532_01_standard.jpg" },
      { id: '10', title: "adidas sambaOG", price: "$70", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c67fe1e42d914f58945caeadf84f6d33_9366/Samba_OG_Shoes_Kids_Black_IE3678_01_standard.jpg" },
      { id: '11', title: "adidas ForumLow", price: "$60", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98da6e46c37b43199652ace2001df3d2_9366/Forum_Low_Shoes_White_FY7986_01_standard.jpg" },
      { id: '12', title: "adidas Ligra7", price: "$75", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0f4073394ed74dc099e5ad1e00ab2511_9366/Ligra_7_Indoor_Shoes_Black_FZ4681_01_standard.jpg" },
      { id: '13', title: "adidas StansmithCS", price: "$77", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/acbcc3dbf1d5474ea38225227e0137d1_9366/Stan_Smith_CS_Shoes_Green_IE7586_01_standard.jpg" },
      { id: '14', title: "adidasxmarvelSpidy", price: "$50", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f463783fd055402cbfb0ae5c00e37b8d_9366/adidas_x_Marvel_Spider-Man_Fortarun_Shoes_Red_GZ0653_01_standard.jpg" },
      { id: '15', title: "nike tatum", price: "$48", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c67fe1e42d914f58945caeadf84f6d33_9366/Samba_OG_Shoes_Kids_Black_IE3678_01_standard.jpg" },
      { id: '16', title: "nike IsoFly", price: "$58", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d5e96c23-34d9-43a4-b204-da18dced2a81/NIKE+ISOFLY+%28PS%29.png" },
      { id: '17', title: "nike Force1Low", price: "$80", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d03f0b1e-eeb0-4af1-a5e1-2fcef69c8049/FORCE+1+LOW+EASYON+LV8+1+%28PS%29.png" },
      { id: '18', title: "nike AirMax", price: "$55", image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1411b8f0-3e92-417a-8616-4dfe385af84c/NIKE+AIR+MAX+SC+%28PSV%29.png" },
  ],


  };
  const toggleFavorite = (itemID) => {
    const isFavorite = favorites.find(favItem => favItem.id === itemID);
    dispatch({
      type: isFavorite ? 'REMOVE_FROM_FAVORITE' : 'ADD_TO_FAVORITE',
      payload:itemID,
    });
  };

  const toggleCart = (itemID) => {
    const isInCart = state.cart.find(cartItem => cartItem.id === itemID);
    dispatch({
      type: isInCart ? 'REMOVE_FROM_CART' : 'ADD_TO_CART',
      payload: itemID,
    });
  };

  return (
    <View style={{flex:1}}>
       <FlatList
        style={{ margin:5}}
      numColumns={2}
      data={items[catagory] || []}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
             <View style={styles.card}>
       <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <TouchableOpacity onPress={()=> toggleFavorite(item)} style={styles.hearto}>
     <Icon 
      name="hearto"
      size = {22}
      color="#000"/>
      </TouchableOpacity>
     
     <Button color='black' title='Add To Cart' onPress={()=> toggleCart(item)}/>
      </View>
          )}
      />
      </View>
  );
};

export default Product;