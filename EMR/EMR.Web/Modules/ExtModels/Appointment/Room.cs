using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels.Appointment
{
    public class Room
    {
        public string Name { get; set; }
        public string Text { set; get; }
        public int Id { set; get; }
        public int GroupId { set; get; }
        public string Color { set; get; }
        public string Designation { get; set; }
        public string Value { get; set; }
    }
}