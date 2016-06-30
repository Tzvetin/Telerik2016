using System;
using System.Collections.Generic;
using System.Text;

using Cosmetics.Contracts;

namespace Cosmetics.Engine
{
    internal class Category : ICategory
    {
        private string name;
        private ICollection<IProduct> productList;

        public Category(string name)
        {
            this.Name = name;
            this.ProductList = new List<IProduct>();
        }

        public string Name
        {
            get
            {
                return this.name;
            }
            set
            {
                this.name = value;
            }
        }

        public ICollection<IProduct> ProductList
        {
            get
            {
                return this.productList;
            }
            set
            {
                this.productList = value;
            }
        }

        public void AddCosmetics(IProduct cosmetics)
        {
            if (!ProductList.Contains(cosmetics))
            {
                ProductList.Add(cosmetics);
            }
        }

        public void RemoveCosmetics(IProduct cosmetics)
        {
            if (ProductList.Contains(cosmetics))
            {
                ProductList.Remove(cosmetics);
            }
        }

        public string Print()
        {
            var sb = new StringBuilder();

            sb.AppendLine(string.Format(" {0} category – {1} products/product in total", this.Name, this.ProductList.Count));
            sb.AppendLine("- {product brand} – {product name}:");
            sb.AppendLine("  * Price: ${product price}");
            sb.AppendLine("  * For gender: Men/Women/Unisex");
            sb.AppendLine("  * Ingredients: {product ingredients, separated by “, “} (when applicable)");
            sb.AppendLine("- {product brand} – {product name}:");
            sb.AppendLine("  * Price: ${product price}");
            sb.AppendLine("  * For gender: {product gender}");
            sb.AppendLine("  * Quantity: {product quantity} ml (when applicable)");
            sb.AppendLine("  * Usage: EveryDay/Medical (when applicable)");

            return sb.ToString();
        }
    }
}