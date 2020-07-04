using System;
using System.ComponentModel.DataAnnotations;

namespace UpstartTest
{
	public class MyData
	{
		private Guid _id;
		private string _name;
		private string _description;
		private int _amount;
		private long _date;
		private bool _isPrivate;

		public Guid id
		{
			get { return _id; }
			set { _id = value; }
		}

		[Required(ErrorMessage = "Missing name.")]
		[StringLength(100, ErrorMessage = "Name can't exceeds 100 chars.")]
		public string name
		{
			get { return _name; }
			set { _name = value; }
		}

		public string description
		{
			get { return _description; }
			set { _description = value; }
		}

		[Range(1, 999999)]
		public int amount
		{
			get { return _amount; }
			set { _amount = value; }
		}

		public long date
		{
			get { return _date; }
			set { _date = value; }
		}

		public bool isPrivate
		{
			get { return _isPrivate; }
			set { _isPrivate = value; }
		}


		public override string ToString()
		{
			return
				id + " " +
				name + " " +
				description + " " +
				date + " " +
				isPrivate;
		}
	}
}
