using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EMR.Modules.ExtModels
{
    [Table("TblFeePayment")]
    public class ServiceFee
    {
        [Key]
        public Int64 FeeId { get; set; }
        public Int64 Mrid { get; set; }
        public Int32 ServiceId { get; set; }
        [Column("ServiceFee")]
        public Int32 ServiceFees { get; set; }
        public DateTime DateCreated { get; set; }
        public Int32 Times { get; set; }
        public String UserName { get; set; }
        public DateTime? LastUpdated { get; set; }
        [NotMapped,Required]
        public Boolean Print { get; set; }
    }
}