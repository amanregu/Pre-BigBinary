# "People who like this also like... ". How would you implement this feature in an e-commerce shop?

### Let's say a user want to buy a particular product, in this scenario we can have two cases:
1. The particular product does not have any likes.
2. The particular product does have likes.
### In the first case, we can either not recommend anything to the user or recommend products that are in the same sub-catogory. 
### In the second case, we can have more accurate recommendations. In the Schema for product we can have a key called similarProducts which will contain an array of id's of all the similar products. To add the id's of the products to this array, we will have a function that'll run everytime a user likes a product. Let's say a user likes Product A. Now this function will run and it'll take two parameters the userId and the productId. First it'll get the product details using the productId. After that it'll get all the other products liked by the user and then filter them to keep only the products which are in the same catogory as the product. And the filtered list of products will be added to the similarProducts. The updated product details are then updated in the DB.