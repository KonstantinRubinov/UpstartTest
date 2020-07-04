using System;
using System.Collections.Generic;

namespace UpstartTest
{
	public interface IMyDataRepository<TEntity>: IDisposable
	{
		IEnumerable<MyDataModel> GetAll();
		MyDataModel Get(string id);
		TEntity GetToUpdate(string id);
		string Add(MyDataModel entity);
		void Update(TEntity dbEntity, MyDataModel entity);
		void Delete(TEntity entity);
	}
}
