using System.Collections.Generic;
using Cosmetics.Contracts;

namespace Cosmetics.Cart
{
    public class ShoppingCart
    {
        private ICollection<IProduct> productList;

        public ShoppingCart()
        {
            this.ProductList = null;
        }

        public ICollection<IProduct> ProductList
        {
            get { return this.productList; }
            set { productList = value; }
        }

        public void AddProduct(IProduct product)
        {
            if (!ProductList.Contains(product))
            {
                ProductList.Add(product);
            }
        }

        public void RemoveProduct(IProduct product)
        {
            if (ProductList.Contains(product))
            {
                ProductList.Remove(product);
            }
        }

        public bool ContainsProduct(IProduct product)
        {
            if (!ProductList.Contains(product))
            {
                return false;
            }
            return true;
        }

        public decimal TotalPrice()
        {
            decimal totalPrice = 0;

            foreach (var item in ProductList)
            {
                totalPrice += item.Price;
            }

            return totalPrice;
        }
    }
}
