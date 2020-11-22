
namespace EMR.Regs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[HFNoOfPatients]")]
    [DisplayName("Hf No Of Patients"), InstanceName("Hf No Of Patients")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class HfNoOfPatientsRow : Row, IIdRow
    {
        [DisplayName("Facility Id"), Column("FacilityID")]
        public Int32? FacilityId
        {
            get { return Fields.FacilityId[this]; }
            set { Fields.FacilityId[this] = value; }
        }

        [DisplayName("No Of Patients")]
        public Int32? NoOfPatients
        {
            get { return Fields.NoOfPatients[this]; }
            set { Fields.NoOfPatients[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.FacilityId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HfNoOfPatientsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field FacilityId;
            public Int32Field NoOfPatients;
        }
    }
}
