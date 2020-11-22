
namespace EMR.Structure.Entities
{
    using global::Administration;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Structure"), TableName("[dbo].[BedReportDetails]")]
    [DisplayName("Report Details"), InstanceName("Report Detail")]
    [ReadPermission(PermissionKeys.BedReportDetails.View)]
    [ModifyPermission(PermissionKeys.BedReportDetails.Update)]
    [InsertPermission(PermissionKeys.BedReportDetails.Insert)]
    [DeletePermission(PermissionKeys.BedReportDetails.Delete)]
    public sealed class BedReportDetailsRow : Row, IIdRow, INameRow,IMultiTenantRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Report"), ForeignKey("[dbo].[BedReports]", "ReportId"), LeftJoin("jReport"), TextualField("ReportComment")]
        public Int32? ReportId
        {
            get { return Fields.ReportId[this]; }
            set { Fields.ReportId[this] = value; }
        }

        [DisplayName("Ward"),NotNull, ForeignKey("[dbo].[TblWard]", "WardID"), LeftJoin("jWard"), TextualField("WardWardName")]
        public Int32? WardId
        {
            get { return Fields.WardId[this]; }
            set { Fields.WardId[this] = value; }
        }

        [DisplayName("Active Beds"), NotNull]
        public Int32? BedActive
        {
            get { return Fields.BedActive[this]; }
            set { Fields.BedActive[this] = value; }
        }


        [DisplayName("Facility Id"), Expression("jReport.[FacilityId]")]
        public Int32? ReportFacilityId
        {
            get { return Fields.ReportFacilityId[this]; }
            set { Fields.ReportFacilityId[this] = value; }
        }

        [DisplayName("Year"), Expression("jReport.[Year]")]
        public Int32? ReportYear
        {
            get { return Fields.ReportYear[this]; }
            set { Fields.ReportYear[this] = value; }
        }

        [DisplayName("Month"), Expression("jReport.[Month]")]
        public Int32? ReportMonth
        {
            get { return Fields.ReportMonth[this]; }
            set { Fields.ReportMonth[this] = value; }
        }

        [DisplayName("Comment"), Expression("jReport.[Comment]")]
        public String ReportComment
        {
            get { return Fields.ReportComment[this]; }
            set { Fields.ReportComment[this] = value; }
        }

        [DisplayName("User Name"), Expression("jReport.[UserName]")]
        public String ReportUserName
        {
            get { return Fields.ReportUserName[this]; }
            set { Fields.ReportUserName[this] = value; }
        }

        [DisplayName("Last Updated"), Expression("jReport.[LastUpdated]")]
        public DateTime? ReportLastUpdated
        {
            get { return Fields.ReportLastUpdated[this]; }
            set { Fields.ReportLastUpdated[this] = value; }
        }

        [DisplayName("Report Tenant Id"), Expression("jReport.[TenantId]")]
        public Int32? ReportTenantId
        {
            get { return Fields.ReportTenantId[this]; }
            set { Fields.ReportTenantId[this] = value; }
        }
        [MinSelectLevel(SelectLevel.Always)]
        [DisplayName("Ward Name"), Expression("jWard.[WardName]")]
        public String WardWardName
        {
            get { return Fields.WardWardName[this]; }
            set { Fields.WardWardName[this] = value; }
        }
        [MinSelectLevel(SelectLevel.Always)]
        [DisplayName("Ward Name D"), Expression("jWard.[WardNameD]")]
        public String WardWardNameD
        {
            get { return Fields.WardWardNameD[this]; }
            set { Fields.WardWardNameD[this] = value; }
        }

        [DisplayName("Ward Num Beds"), Expression("jWard.[WardNumBeds]")]
        public Int32? WardWardNumBeds
        {
            get { return Fields.WardWardNumBeds[this]; }
            set { Fields.WardWardNumBeds[this] = value; }
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
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.WardWardName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BedReportDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ReportId;
            public Int32Field WardId;
            public Int32Field BedActive;
            public Int32Field TenantId;

            public Int32Field ReportFacilityId;
            public Int32Field ReportYear;
            public Int32Field ReportMonth;
            public StringField ReportComment;
            public StringField ReportUserName;
            public DateTimeField ReportLastUpdated;
            public Int32Field ReportTenantId;

            public StringField WardWardName;
            public StringField WardWardNameD;
            public Int32Field WardWardNumBeds;
        }
    }
}
