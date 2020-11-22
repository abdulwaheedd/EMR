
namespace EMR.OPD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Medadmins"), TableName("[dbo].[BloodTransfusions]")]
    [DisplayName("Blood Transfusions"), InstanceName("Blood Transfusions")]
    [ReadPermission(PermissionKeys.BloodTransfusions.View)]
    [ModifyPermission(PermissionKeys.BloodTransfusions.Update)]
    [InsertPermission(PermissionKeys.BloodTransfusions.Insert)]
    [DeletePermission(PermissionKeys.BloodTransfusions.Delete)]
    public sealed class OpdBloodTransfusionsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Transfusion Id"), Identity]
        public Int32? TransfusionId
        {
            get { return Fields.TransfusionId[this]; }
            set { Fields.TransfusionId[this] = value; }
        }

        [DisplayName("Visit Id")]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Blood group"), NotNull, Column("BloodGroupId"), ForeignKey("[dbo].[TblBloodGroup]", "BloodGroupId"), LeftJoin("jBloodGroup")]
        public Int32? BloodGroupId
        {
            get { return Fields.BloodGroupId[this]; }
            set { Fields.BloodGroupId[this] = value; }
        }

        [DisplayName("Recom. Qty"),NotNull]
        public Int32? Recomquantity
        {
            get { return Fields.Recomquantity[this]; }
            set { Fields.Recomquantity[this] = value; }
        }

        [DisplayName("Transmitted Qty")]
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
        [DisplayName("Blood Status"),Expression("jBloodStatus.[Bloodstatus]"), QuickSearch]
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


        [DisplayName("Recom. Date Time")]
        public DateTime? RecDateTime
        {
            get { return Fields.RecDateTime[this]; }
            set { Fields.RecDateTime[this] = value; }
        }

        [DisplayName("Recom. Date (Shamsi)"), Size(50)]
        public String SRecDate
        {
            get { return Fields.SRecDate[this]; }
            set { Fields.SRecDate[this] = value; }
        }

        [DisplayName("Trans. Date Time")]
        public DateTime? TransDateTime
        {
            get { return Fields.TransDateTime[this]; }
            set { Fields.TransDateTime[this] = value; }
        }

        [DisplayName("Trans. Date (Shamsi)"), Size(50)]
        public String STransDate
        {
            get { return Fields.STransDate[this]; }
            set { Fields.STransDate[this] = value; }
        }

        [DisplayName("User Id")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Updated")]
        public DateTime? Updated
        {
            get { return Fields.Updated[this]; }
            set { Fields.Updated[this] = value; }
        }

        [DisplayName("Tran User Id")]
        public Int32? TranUserId
        {
            get { return Fields.TranUserId[this]; }
            set { Fields.TranUserId[this] = value; }
        }

        [DisplayName("Trans Updated")]
        public DateTime? TransUpdated
        {
            get { return Fields.TransUpdated[this]; }
            set { Fields.TransUpdated[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.TransfusionId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Bloodstatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OpdBloodTransfusionsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field TransfusionId;
            public Int64Field VisitId;
            public Int32Field BloodGroupId;
            public Int32Field Recomquantity;
            public Int32Field Transmitquantity;
            public StringField Bloodstatus;
            public DateTimeField RecDateTime;
            public StringField SRecDate;
            public DateTimeField TransDateTime;
            public StringField STransDate;
            public Int32Field UserId;
            public DateTimeField Updated;
            public Int32Field TranUserId;
            public DateTimeField TransUpdated;


            public Int32Field BloodstatusId;
            public StringField BloodGroup;
        }
    }
}
