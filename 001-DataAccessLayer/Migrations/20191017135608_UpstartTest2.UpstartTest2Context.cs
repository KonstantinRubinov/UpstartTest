using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace UpstartTest.Migrations
{
	public partial class UpstartTestUpstartTestContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MyDatas",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    name = table.Column<string>(maxLength: 100, nullable: false),
                    description = table.Column<string>(nullable: true),
                    amount = table.Column<int>(nullable: false),
                    date = table.Column<long>(nullable: false),
                    isPrivate = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MyDatas", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MyDatas");
        }
    }
}
