using Cosmetics.Engine;
using System.Text;

namespace Cosmetics
{
    public class CosmeticsProgram
    {
        public static void Main()
        {
            //CosmeticsEngine.Instance.Start();

            var sb = new StringBuilder();

            sb.AppendLine("hi");
            sb.AppendLine();
            sb.AppendLine("there");

            System.Console.WriteLine(sb.ToString());
        }
    }
}
