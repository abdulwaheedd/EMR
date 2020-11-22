using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels.Appointment
{
    public class Patient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        public long Mobile { get; set; }
        public string BloodGroup { get; set; }
        public string Address { get; set; }
    }
}