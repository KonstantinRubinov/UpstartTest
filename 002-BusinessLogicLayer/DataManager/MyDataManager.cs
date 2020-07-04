using System;
using System.Collections.Generic;
using System.Linq;

namespace UpstartTest
{
	public class MyDataManager : IMyDataRepository<MyData>
	{
		readonly UpstartTestContext _upstartTestContext;

		public MyDataManager(UpstartTestContext context)
		{
			_upstartTestContext = context;
		}

		public IEnumerable<MyDataModel> GetAll()
		{
			return _upstartTestContext.MyDatas.Select(md => new MyDataModel
			{
				id = md.id.ToString(),
				name = md.name,
				description = md.description,
				amount = md.amount,
				date = new DateTime(md.date),
				isPrivate = md.isPrivate
			}).ToList();
		}

		public MyDataModel Get(string id)
		{
			return _upstartTestContext.MyDatas.Where(md => md.id.ToString().Equals(id)).Select(md => new MyDataModel
			{
				id = md.id.ToString(),
				name = md.name,
				description = md.description,
				amount = md.amount,
				date = new DateTime(md.date),
				isPrivate = md.isPrivate
			}).SingleOrDefault();
		}

		public MyData GetToUpdate(string id)
		{
			return _upstartTestContext.MyDatas.FirstOrDefault(md => md.id.ToString().Equals(id));
		}

		public string Add(MyDataModel entity)
		{
			MyData dbEntity = new MyData();
			dbEntity.name = entity.name;
			dbEntity.description = entity.description;
			dbEntity.amount = entity.amount;
			dbEntity.date = entity.date.Ticks;
			dbEntity.isPrivate = entity.isPrivate;

			_upstartTestContext.MyDatas.Add(dbEntity);
			_upstartTestContext.SaveChanges();

			return dbEntity.id.ToString();
		}

		public void Update(MyData dbEntity, MyDataModel entity)
		{
			dbEntity.id = Guid.Parse(entity.id);
			dbEntity.name = entity.name;
			dbEntity.description = entity.description;
			dbEntity.amount = entity.amount;
			dbEntity.date = entity.date.Ticks;
			dbEntity.isPrivate = entity.isPrivate;

			_upstartTestContext.SaveChanges();
		}

		public void Delete(MyData entity)
		{
			_upstartTestContext.MyDatas.Remove(entity);
			_upstartTestContext.SaveChanges();
		}

		private bool disposed = false;

		protected virtual void Dispose(bool disposing)
		{
			if (!this.disposed)
			{
				if (disposing)
				{
					_upstartTestContext.Dispose();
				}
			}
			this.disposed = true;
		}

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}
	}
}
