
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[LkpBloodStatus]")]
    [DisplayName("Blood Status"), InstanceName("Blood Status")]
    [LookupScript("Configs.LkpBloodStatus")]
    [ReadPermission(PermissionKeys.BloodStatus.View)]
    [ModifyPermission(PermissionKeys.BloodStatus.Update)]
    [InsertPermission(PermissionKeys.BloodStatus.Insert)]
    [DeletePermission(PermissionKeys.BloodStatus.Delete)]
    public sealed class BloodStatusRow : Row, IIdRow, INameRow
    {
        [DisplayName("B Id"), Identity]
        public Int32? BId
        {
            get { return Fields.BId[this]; }
            set { Fields.BId[this] = value; }
        }

        [DisplayName("Bloodstatus"), Size(50), QuickSearch]
        public String Bloodstatus
        {
            get { return Fields.Bloodstatus[this]; }
            set { Fields.Bloodstatus[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Bloodstatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BloodStatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BId;
            public StringField Bloodstatus;
        }
    }
}
