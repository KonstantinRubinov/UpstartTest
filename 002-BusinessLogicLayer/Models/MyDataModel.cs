using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace UpstartTest
{
	[DataContract]
	public class MyDataModel
	{
		private string _id;
		private string _name;
		private string _description;
		private int _amount;
		private DateTime _date;
		private bool _isPrivate;

		[DataMember]
		public string id
		{
			get { return _id; }
			set { _id = value; }
		}

		[Required(ErrorMessage = "Missing name.")]
		[StringLength(100, ErrorMessage = "Name can't exceeds 100 chars.")]
		[DataMember]
		public string name
		{
			get { return _name; }
			set { _name = value; }
		}

		[DataMember]
		public string description
		{
			get { return _description; }
			set { _description = value; }
		}

		[Range(1, 999999)]
		[DataMember]
		public int amount
		{
			get { return _amount; }
			set { _amount = value; }
		}

		[DataMember]
		public DateTime date
		{
			get { return _date; }
			set { _date = value; }
		}

		[DataMember]
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
