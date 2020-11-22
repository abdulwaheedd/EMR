
namespace EMR.Medadmins.Entities
{
    using EMR.OPD.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Medadmins"), TableName("[dbo].[VisitsMedicine]")]
    [DisplayName("Medicines"), InstanceName("Medicine")]
    [ReadPermission(PermissionKeys.Visitsmedicine.View)]
    [ModifyPermission(PermissionKeys.Visitsmedicine.Update)]
    [InsertPermission(PermissionKeys.Visitsmedicine.Insert)]
    [DeletePermission(PermissionKeys.Visitsmedicine.Delete)]
    [LookupScript("Configs.VisitsMedicine")]
    public sealed class VisitsmedicineRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Id"), PrimaryKey]
        public Int64? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Visit Id"), NotNull]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Mrid"), Column("MRID"), NotNull, ForeignKey("[dbo].[Outpatients]", "MRID"), LookupInclude, LeftJoin("jOutpatients")]
        [LookupEditor(typeof(PatientsRow))]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("Medicine"), Size(614), QuickSearch]
        public String Medicine
        {
            get { return Fields.Medicine[this]; }
            set { Fields.Medicine[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Medicine; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public VisitsmedicineRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field OrderId;
            public Int64Field VisitId;
            public Int64Field Mrid;
            public StringField Medicine;
        }
    }
}
