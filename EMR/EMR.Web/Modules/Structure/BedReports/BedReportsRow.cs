
namespace EMR.Structure.Entities
{
    using global::Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Structure"), TableName("[dbo].[BedReports]")]
    [DisplayName("Bed Reports"), InstanceName("Report")]
    [ReadPermission(PermissionKeys.BedReports.View)]
    [ModifyPermission(PermissionKeys.BedReports.Update)]
    [InsertPermission(PermissionKeys.BedReports.Insert)]
    [DeletePermission(PermissionKeys.BedReports.Delete)]
    public sealed class BedReportsRow : Row, IIdRow, INameRow, IMultiTenantRow
    {
        [DisplayName("Report Id"), Identity]
        public Int32? ReportId
        {
            get { return Fields.ReportId[this]; }
            set { Fields.ReportId[this] = value; }
        }

        [DisplayName("Facility"), NotNull, ForeignKey("[dbo].[FacilityInfo]", "FacilityID"), LeftJoin("jFacility"), TextualField("FacilityViliCode")]
        public Int32? FacilityId
        {
            get { return Fields.FacilityId[this]; }
            set { Fields.FacilityId[this] = value; }
        }

        [DisplayName("Year"), NotNull]
        public Int32? Year
        {
            get { return Fields.Year[this]; }
            set { Fields.Year[this] = value; }
        }

        [DisplayName("Month"), NotNull]
        public Int32? Month
        {
            get { return Fields.Month[this]; }
            set { Fields.Month[this] = value; }
        }

        [DisplayName("Comment"), Size(300), QuickSearch]
        public String Comment
        {
            get { return Fields.Comment[this]; }
            set { Fields.Comment[this] = value; }
        }

        [DisplayName("User Name"), Size(50)]
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


        [DisplayName("District Id"), Expression("jFacility.[DistrictId]")]
        public Int32? FacilityDistrictId
        {
            get { return Fields.FacilityDistrictId[this]; }
            set { Fields.FacilityDistrictId[this] = value; }
        }


        [DisplayName("Facility Name"), Expression("jFacility.[FacilityName]")]
        public String FacilityFacilityName
        {
            get { return Fields.FacilityFacilityName[this]; }
            set { Fields.FacilityFacilityName[this] = value; }
        }


        [DisplayName("Facility Lat"), Expression("jFacility.[LAT]")]
        public Double? FacilityLat
        {
            get { return Fields.FacilityLat[this]; }
            set { Fields.FacilityLat[this] = value; }
        }

        [DisplayName("Facility Lon"), Expression("jFacility.[LON]")]
        public Double? FacilityLon
        {
            get { return Fields.FacilityLon[this]; }
            set { Fields.FacilityLon[this] = value; }
        }

        [DisplayName(""), MasterDetailRelation(foreignKey: "ReportId")]
        public List<BedReportDetailsRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
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
            get { return Fields.ReportId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Comment; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BedReportsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ReportId;
            public Int32Field FacilityId;
            public Int32Field Year;
            public Int32Field Month;
            public StringField Comment;
            public StringField UserName;
            public DateTimeField LastUpdated;
            public Int32Field TenantId;

            public Int32Field FacilityDistrictId;
            public StringField FacilityFacilityName;
            public DoubleField FacilityLat;
            public DoubleField FacilityLon;

            public RowListField<BedReportDetailsRow> DetailList;

        }
    }
}
