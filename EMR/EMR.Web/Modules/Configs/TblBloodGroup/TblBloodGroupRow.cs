
namespace EMR.Configs.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[TblBloodGroup]")]
    [DisplayName("Blood Groups"), InstanceName("Group")]
    [ReadPermission(PermissionKeys.TblBloodGroup.View)]
    [ModifyPermission(PermissionKeys.TblBloodGroup.Update)]
    [InsertPermission(PermissionKeys.TblBloodGroup.Insert)]
    [DeletePermission(PermissionKeys.TblBloodGroup.Delete)]
    [LookupScript("Configs.TblBloodGroup")]
    public sealed class TblBloodGroupRow : Row, IIdRow, INameRow
    {
        [DisplayName("Blood Group Id"), PrimaryKey]
        public Int32? BloodGroupId
        {
            get { return Fields.BloodGroupId[this]; }
            set { Fields.BloodGroupId[this] = value; }
        }

        [DisplayName("Blood Group"), Size(50), QuickSearch]
        public String BloodGroup
        {
            get { return Fields.BloodGroup[this]; }
            set { Fields.BloodGroup[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BloodGroupId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BloodGroup; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TblBloodGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BloodGroupId;
            public StringField BloodGroup;
        }
    }
}
