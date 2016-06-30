using Cosmetics.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Cosmetics.Common;

namespace Cosmetics.Products
{
    public class Toothpaste : IToothpaste, IProduct
    {
        private string brand;
        private GenderType gender;
        private string ingredients;
        private string name;
        private decimal price;

        //================================================

        public Toothpaste(string name, string brand, decimal price,
           GenderType gender, IList<string> ingredients)
        {

        }

        //================================================

        public string Brand
        {
            get
            {
                return this.brand;
            }
        }

        public GenderType Gender
        {
            get
            {
                return this.gender;
            }
        }

        public string Ingredients
        {
            get
            {
                return this.ingredients;
            }
        }

        public string Name
        {
            get
            {
                return this.name;
            }
        }

        public decimal Price
        {
            get
            {
                return this.price;
            }
        }

        public string Print()
        {
            throw new NotImplementedException();
        }
    }
}
