using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace UpstartTest
{
	[Route("api/Entity")]
	[ApiController]
	public class MyDatasApiController : ControllerBase
	{
		private readonly IMyDataRepository<MyData> _dataRepository;
		public MyDatasApiController(IMyDataRepository<MyData> dataRepository)
		{
			_dataRepository = dataRepository;
		}

		[HttpGet]
		public IActionResult GetAll()
		{
			try
			{
				IEnumerable<MyDataModel> datas = _dataRepository.GetAll();
				return Ok(datas);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpGet("{id}", Name = "GetData")]
		public IActionResult GetData(string id)
		{
			try
			{
				MyDataModel myData = _dataRepository.Get(id);
				return Ok(myData);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpPost]
		public IActionResult Post(MyDataModel myData)
		{
			if (myData == null)
			{
				return BadRequest("Data is null.");
			}

			try
			{
				myData.id = _dataRepository.Add(myData);
				return CreatedAtRoute("GetData", new { id = myData.id }, myData);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}

		[HttpPut("{id}")]
		public IActionResult Put(string id, MyDataModel myData)
		{
			myData.id = id;
			if (myData == null)
			{
				return BadRequest("data is null.");
			}

			MyData dataToUpdate = _dataRepository.GetToUpdate(id);

			try
			{
				_dataRepository.Update(dataToUpdate, myData);
				return CreatedAtRoute("GetData", new { id = myData.id }, myData);
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}


		[HttpDelete("{id}")]
		public IActionResult Delete(string id)
		{
			MyData myData = _dataRepository.GetToUpdate(id);

			try
			{
				_dataRepository.Delete(myData);
				return NoContent();
			}
			catch (Exception ex)
			{
				Errors errors = ErrorsHelper.GetErrors(ex);
				return StatusCode(StatusCodes.Status500InternalServerError, errors);
			}
		}
	}
}