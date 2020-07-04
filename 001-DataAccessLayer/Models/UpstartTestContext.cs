using Microsoft.EntityFrameworkCore;

namespace UpstartTest
{
	public class UpstartTestContext : DbContext
	{
		public UpstartTestContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<MyData> MyDatas { get; set; }
	}
}

//Add-Migration UpstartTest.UpstartTestContext
//update-database