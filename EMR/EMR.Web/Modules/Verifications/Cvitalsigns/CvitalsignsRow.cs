
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Cvitalsigns]")]
    [DisplayName("Vital signs"), InstanceName("Vital Sign")]
    [ReadPermission(PermissionKeys.Cvitalsigns.View)]
    public sealed class CvitalsignsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Vital Id"), PrimaryKey]
        public Int32? VitalId
        {
            get { return Fields.VitalId[this]; }
            set { Fields.VitalId[this] = value; }
        }
        [DisplayName("Mrid"), Column("Mrid"), NotNull]
        public Int64? Mrid
        {
            get { return Fields.Mrid[this]; }
            set { Fields.Mrid[this] = value; }
        }

        [DisplayName("Visit Id")]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Visit Date"), NotNull]
        public DateTime? DateOfVisit
        {
            get { return Fields.DateOfVisit[this]; }
            set { Fields.DateOfVisit[this] = value; }
        }

        [DisplayName("Visit Date (Shamsi)"), Size(50), QuickSearch]
        public String SDateOfVisit
        {
            get { return Fields.SDateOfVisit[this]; }
            set { Fields.SDateOfVisit[this] = value; }
        }

        [DisplayName("Pulse")]
        public int? Pulse
        {
            get { return Fields.Pulse[this]; }
            set { Fields.Pulse[this] = value; }
        }

        [DisplayName("Resp. Rate"), Column("RR")]
        public int? Rr
        {
            get { return Fields.Rr[this]; }
            set { Fields.Rr[this] = value; }
        }

        [DisplayName("Temp")]
        public int? Temp
        {
            get { return Fields.Temp[this]; }
            set { Fields.Temp[this] = value; }
        }

        [DisplayName("Blood Pressure"), NotNull, Column("BP"), Size(50), QuickSearch]
        public String Bp
        {
            get { return Fields.Bp[this]; }
            set { Fields.Bp[this] = value; }
        }

        [DisplayName("Weight"), NotNull]
        public int? Weight
        {
            get { return Fields.Weight[this]; }
            set { Fields.Weight[this] = value; }
        }

        [DisplayName("Height"), NotNull]
        public int? Height
        {
            get { return Fields.Height[this]; }
            set { Fields.Height[this] = value; }
        }


        [DisplayName("Heart Rate"), Column("HR")]
        public int? Hr
        {
            get { return Fields.Hr[this]; }
            set { Fields.Hr[this] = value; }
        }

        [DisplayName("O2 Saturation")]
        public int? O2
        {
            get { return Fields.O2[this]; }
            set { Fields.O2[this] = value; }
        }

        [DisplayName("Pain (0-10)")]
        [IntegerEditor(MaxValue = 10, MinValue = 0)]
        public int? Pain
        {
            get { return Fields.Pain[this]; }
            set { Fields.Pain[this] = value; }
        }

        [DisplayName("Date Time")]
        [DisplayFormat("dd/MM/yyyy HH:mm:ss")]
        public DateTime? VitalDateTime
        {
            get { return Fields.VitalDateTime[this]; }
            set { Fields.VitalDateTime[this] = value; }
        }

        [DisplayName("Date (Shamsi)"), Size(50)]
        public String SVitalDate
        {
            get { return Fields.SVitalDate[this]; }
            set { Fields.SVitalDate[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Mrid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SDateOfVisit; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CvitalsignsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field VitalId;
            public Int64Field Mrid;
            public Int64Field VisitId;
            public DateTimeField DateOfVisit;
            public StringField SDateOfVisit;
            public Int32Field Pulse;
            public Int32Field Rr;
            public Int32Field Temp;
            public StringField Bp;
            public Int32Field Weight;
            public Int32Field Height;
            public Int32Field Hr;
            public Int32Field O2;
            public Int32Field Pain;
            public DateTimeField VitalDateTime;
            public StringField SVitalDate;
        }
    }
}
