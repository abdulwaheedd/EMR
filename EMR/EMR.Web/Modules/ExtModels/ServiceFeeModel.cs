using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMR.Modules.ExtModels
{
    public class ServiceFeeModel
    {
        public Int64 FeeId { get; set; }
        public Int64 Mrid { get; set; }
        public Int32 ServiceId { get; set; }
        public Boolean Print { get; set; }
    }
}