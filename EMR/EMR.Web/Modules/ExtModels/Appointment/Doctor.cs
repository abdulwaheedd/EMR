using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels.Appointment
{
    public class Doctor
    {
      public int  Id { get; set; }
      public int  GroupId { get; set; }
      public string  Color { get; set; }
      public string  Designation { get; set; } 
      public string  Value { get; set; }
      public string  Name { get; set; } 
      public string  Text{ get; set; }
    }
}