using System;
using System.Collections.Generic;
using System.Linq;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options): base(options)
        {

        }

//entities using to create table. mfö.
        public DbSet<Product> Products {get;set;}
    }
}