function discoverOriginalPrice(discountedPrice, salePercentage){
  return Math.trunc(discountedPrice / (1-salePercentage/100)*100)/100;
}
