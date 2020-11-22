
namespace EMR.Configs.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Configs"), TableName("[dbo].[lkpPhysExams]")]
    [DisplayName("Physical Exams"), InstanceName("Physical Exam")]
    [ReadPermission(PermissionKeys.LkpPhysExams.View)]
    [ModifyPermission(PermissionKeys.LkpPhysExams.Update)]
    [InsertPermission(PermissionKeys.LkpPhysExams.Insert)]
    [DeletePermission(PermissionKeys.LkpPhysExams.Delete)]
    [LookupScript("Configs.lkpPhysExams")]
    public sealed class LkpPhysExamsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Phys Exam Id"), NotNull]
        public Int32? PhysExamId
        {
            get { return Fields.PhysExamId[this]; }
            set { Fields.PhysExamId[this] = value; }
        }


        [DisplayName("Phys Exam Name"), Size(200), QuickSearch]
        public String PhysExamName
        {
            get { return Fields.PhysExamName[this]; }
            set { Fields.PhysExamName[this] = value; }
        }

        [DisplayName("Group"), NotNull]
        [Column("GroupId"), ForeignKey("[dbo].[LkpPhysExamGroup]", "GroupId"), LookupInclude, LeftJoin("jGroup")]
        

        public Int32? GroupId
        {
            get { return Fields.GroupId[this]; }
            set { Fields.GroupId[this] = value; }
        }

        [DisplayName("Physical Group"), Expression("jGroup.[GroupName]")]
        public string GroupName
        {
            get { return Fields.GroupName[this]; }
            set { Fields.GroupName[this] = value; }
        }

        
        [DisplayName("Exam Name"), Expression("t0.[PhysExamName]+'-'+jGroup.[GroupName]")]
        public string GroupEamName
        {
            get { return Fields.GroupEamName[this]; }
            set { Fields.GroupEamName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PhysExamId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GroupEamName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public LkpPhysExamsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PhysExamId;
            public StringField PhysExamName;
            public Int32Field GroupId;
            public StringField GroupName;
            public StringField GroupEamName;
        }
    }
}
