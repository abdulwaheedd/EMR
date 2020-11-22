
namespace EMR.OPD.Entities
{
    using EMR.Configs.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("OPD"), TableName("[dbo].[PhysicalExamination]")]
    [DisplayName("Physical Examinations"), InstanceName("Examination")]
    [ReadPermission(PermissionKeys.PhysicalExamination.View)]
    [ModifyPermission(PermissionKeys.PhysicalExamination.Update)]
    [InsertPermission(PermissionKeys.PhysicalExamination.Insert)]
    [DeletePermission(PermissionKeys.PhysicalExamination.Delete)]
    public sealed class PhysicalExaminationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Visit"), NotNull, ForeignKey("[dbo].[Visits]", "VisitId"), LeftJoin("jVisit"), TextualField("VisitPhoneNumber")]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

      
        [NotNull]
        [ForeignKey("[dbo].[lkpPhysExams]", "PhysExamId"), LeftJoin("jPhysExam")]
        [DisplayName("Examination")]
        public Int32? PhysExamId
        {
            get { return Fields.PhysExamId[this]; }
            set { Fields.PhysExamId[this] = value; }
        }
      
        [NotNull]
        [ForeignKey("[dbo].[LkpPhysExamGroup]", "GroupId"), LeftJoin("jPhysExamGroup")]
        [DisplayName("Exam type")]
        public Int32? GroupId
        {
            get { return Fields.GroupId[this]; }
            set { Fields.GroupId[this] = value; }
        }

        [DisplayName("Note"),HtmlNoteContentEditor,NotNull, QuickSearch]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
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
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }


        [DisplayName("Exam Name"), Expression("jPhysExam.[PhysExamName]"), QuickSearch]
        public String PhysExamName
        {
            get { return Fields.PhysExamName[this]; }
            set { Fields.PhysExamName[this] = value; }
        }

        

        [DisplayName("Exam Type"), Expression("jPhysExamGroup.[GroupName]"), QuickSearch]
        public String PhysExamGroup
        {
            get { return Fields.PhysExamGroup[this]; }
            set { Fields.PhysExamGroup[this] = value; }
        }


        StringField INameRow.NameField
        {
            get { return Fields.Note; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PhysicalExaminationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field VisitId;
            public Int32Field GroupId;
            public Int32Field PhysExamId;
            public StringField Note;
            public Int32Field UserId;
            public DateTimeField Updated;

            public StringField PhysExamName;
            public StringField PhysExamGroup;

        }
    }
}
