
namespace EMR.Regs.Entities
{
    using global::Administration;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Regs"), TableName("[dbo].[TblDischarge]")]
    [DisplayName("Discharges"), InstanceName("Discharge")]
    [ReadPermission(PermissionKeys.TblDischarge.View)]
    [ModifyPermission(PermissionKeys.TblDischarge.Update)]
    [InsertPermission(PermissionKeys.TblDischarge.Insert)]
    [DeletePermission(PermissionKeys.TblDischarge.Delete)]
    public sealed class TblDischargeRow : Row, IIdRow, INameRow,IMultiTenantRow
    {

        [DisplayName("Dis Id"), Column("disID"), PrimaryKey]
        public Int32? DisId
        {
            get { return Fields.DisId[this]; }
            set { Fields.DisId[this] = value; }
        }

        [DisplayName("MRID"), Column("MRID"), ForeignKey("[dbo].[TblPatients]", "MRID"), LeftJoin("jMrid"), TextualField("MridPatName")]
        public Int32? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("MRN"), Expression("jMrid.[MRN]"),QuickSearch]
        public String MRN
        {
            get { return Fields.MRN[this]; }
            set { Fields.MRN[this] = value; }
        }

        [DisplayName("Wardid"), Column("WARDID"), NotNull]
        public Int32? Wardid
        {
            get { return Fields.Wardid[this]; }
            set { Fields.Wardid[this] = value; }
        }

        [DisplayName("Dis Diagnosis"), Size(255), NotNull, QuickSearch]
        public String DisDiagnosis
        {
            get { return Fields.DisDiagnosis[this]; }
            set { Fields.DisDiagnosis[this] = value; }
        }

        [DisplayName("Dis Date")]
        public DateTime? DisDate
        {
            get { return Fields.DisDate[this]; }
            set { Fields.DisDate[this] = value; }
        }

        [DisplayName("Dis Date H"), Size(15)]
        public String DisDateH
        {
            get { return Fields.DisDateH[this]; }
            set { Fields.DisDateH[this] = value; }
        }

        [DisplayName("Dis Status"), Size(255)]
        public String DisStatus
        {
            get { return Fields.DisStatus[this]; }
            set { Fields.DisStatus[this] = value; }
        }

        [DisplayName("User Name"), Size(255)]
        public String UserName
        {
            get { return Fields.UserName[this]; }
            set { Fields.UserName[this] = value; }
        }

        [DisplayName("Last Updated")]
        public DateTime? LastUpdated
        {
            get { return Fields.LastUpdated[this]; }
            set { Fields.LastUpdated[this] = value; }
        }


        [DisplayName("Dis Diag Result")]
        public Int32? DisDiagResult
        {
            get { return Fields.DisDiagResult[this]; }
            set { Fields.DisDiagResult[this] = value; }
        }

        [Insertable(false), Updatable(false), DisplayName("Tenant")]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }
        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DisId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DisDiagnosis; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblDischargeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field DisId;

            public Int32Field Mrid;

            public Int32Field Wardid;

            public StringField DisDiagnosis;

            public DateTimeField DisDate;

            public StringField DisDateH;

            public StringField DisStatus;

            public StringField UserName;

            public DateTimeField LastUpdated;

            public Int32Field TenantId;

            public Int32Field DisDiagResult;
            public StringField MRN;

		}
    }
}
