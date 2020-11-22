
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[LkpPhysExamGroup]")]
    [DisplayName("Phys Exam Group"), InstanceName("Exam Group")]
    [ReadPermission(PermissionKeys.LkpPhysExamGroup.View)]
    [ModifyPermission(PermissionKeys.LkpPhysExamGroup.Update)]
    [InsertPermission(PermissionKeys.LkpPhysExamGroup.Insert)]
    [DeletePermission(PermissionKeys.LkpPhysExamGroup.Delete)]
    [LookupScript("Configs.LkpPhysExamGroup")]
    public sealed class LkpPhysExamGroupRow : Row, IIdRow, INameRow
    {
        [DisplayName("Group Id"), Identity]
        public Int32? GroupId
        {
            get { return Fields.GroupId[this]; }
            set { Fields.GroupId[this] = value; }
        }

        [DisplayName("Group Name"), Size(100), NotNull, QuickSearch]
        public String GroupName
        {
            get { return Fields.GroupName[this]; }
            set { Fields.GroupName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GroupId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GroupName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpPhysExamGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GroupId;
            public StringField GroupName;
        }
    }
}
