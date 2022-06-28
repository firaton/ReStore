using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    // [ApiController]
    // [Route("api/[controller]")]
    public class ProductsController : BaseApiController
    {
        private readonly StoreContext _context;
        public ProductsController(StoreContext context)
        {
            this._context = context;
        }
        [HttpGet]
        // public ActionResult<List<Product>> GetProducts()
        // {
        //     var products = contet.Products.ToList();
        //     return Ok(products);
        // }
        // Bu metodu asenkron metod haline aşağıdaki şekilde basitçe getiriyoruz. mfö.

        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        [HttpGet("{id}")] //api/products/3
        // public ActionResult<Product> GetProduct(int id)
        // {
        //     return context.Products.Find(id);
        // }
        // Benzer şekilde asyn yapıyoruz. mfö.

        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product =  await _context.Products.FindAsync(id);
            if(product==null) return NotFound();
            return product;
        }
    }
}