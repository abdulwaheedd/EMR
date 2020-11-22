
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Cbloodtransfusions]")]
    [DisplayName("Cbloodtransfusions"), InstanceName("Cbloodtransfusions")]
    [ReadPermission(PermissionKeys.Cbloodtransfusions.View)]
    public sealed class CbloodtransfusionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Transfusion Id"), NotNull]
        public Int32? TransfusionId
        {
            get { return Fields.TransfusionId[this]; }
            set { Fields.TransfusionId[this] = value; }
        }

        [DisplayName("Mrid"), Column("MRID"), NotNull]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("Visit Id"), NotNull]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Visit Date (m)"), NotNull]
        public DateTime? DateOfVisit
        {
            get { return Fields.DateOfVisit[this]; }
            set { Fields.DateOfVisit[this] = value; }
        }

        [DisplayName("Visit Date (s)"), Size(50), QuickSearch]
        public String SDateOfVisit
        {
            get { return Fields.SDateOfVisit[this]; }
            set { Fields.SDateOfVisit[this] = value; }
        }

        [DisplayName("Blood group"), NotNull, Column("BloodGroupId"), ForeignKey("[dbo].[TblBloodGroup]", "BloodGroupId"), LeftJoin("jBloodGroup")]
        public Int32? BloodGroupId
        {
            get { return Fields.BloodGroupId[this]; }
            set { Fields.BloodGroupId[this] = value; }
        }

        [DisplayName("Recomquantity")]
        public Int32? Recomquantity
        {
            get { return Fields.Recomquantity[this]; }
            set { Fields.Recomquantity[this] = value; }
        }

        [DisplayName("Transmitquantity")]
        public Int32? Transmitquantity
        {
            get { return Fields.Transmitquantity[this]; }
            set { Fields.Transmitquantity[this] = value; }
        }

        [DisplayName("Blood status"), NotNull, Column("BloodstatusId"), ForeignKey("[dbo].[LkpBloodStatus]", "BId"), LeftJoin("jBloodStatus")]
        public Int32? BloodstatusId
        {
            get { return Fields.BloodstatusId[this]; }
            set { Fields.BloodstatusId[this] = value; }
        }

        [DisplayName("Order Date (m)")]
        public DateTime? RecDateTime
        {
            get { return Fields.RecDateTime[this]; }
            set { Fields.RecDateTime[this] = value; }
        }

        [DisplayName("Order Date (s)"), Size(50)]
        public String SRecDate
        {
            get { return Fields.SRecDate[this]; }
            set { Fields.SRecDate[this] = value; }
        }

        [DisplayName("Trans Date (m)")]
        public DateTime? TransDateTime
        {
            get { return Fields.TransDateTime[this]; }
            set { Fields.TransDateTime[this] = value; }
        }

        [DisplayName("Trans Date (s)"), Size(50)]
        public String STransDate
        {
            get { return Fields.STransDate[this]; }
            set { Fields.STransDate[this] = value; }
        }

        [DisplayName("Blood Status"), Expression("jBloodStatus.[Bloodstatus]"), QuickSearch]
        public String Bloodstatus
        {
            get { return Fields.Bloodstatus[this]; }
            set { Fields.Bloodstatus[this] = value; }
        }

        [DisplayName("Blood Group"), Expression("jBloodGroup.[BloodGroup]"), QuickSearch]
        public String BloodGroup
        {
            get { return Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TransfusionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SDateOfVisit; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CbloodtransfusionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TransfusionId;
            public Int64Field Mrid;
            public Int64Field VisitId;
            public DateTimeField DateOfVisit;
            public StringField SDateOfVisit;
            public Int32Field BloodGroupId;
            public Int32Field Recomquantity;
            public Int32Field Transmitquantity;
            public Int32Field BloodstatusId;
            public DateTimeField RecDateTime;
            public StringField SRecDate;
            public DateTimeField TransDateTime;
            public StringField STransDate;

            public StringField Bloodstatus;
            public StringField BloodGroup;
        }
    }
}
