using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels.Appointment
{
    public class Appointment
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Description { get; set; }
        public Boolean AllDay { get; set; }
        public Boolean Recurrence { get; set; }
        public string RecurrenceRule { get; set; }
        public int RoomId { get; set; }
        public int OwnerId { get; set; }
        public string Category { get; set; }
        public string Categorycolor { get; set; }
        public string Department { get; set; }
    }
}