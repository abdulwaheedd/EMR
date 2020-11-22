
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Cphysicalexamination]")]
    [DisplayName("Physical examination"), InstanceName("Examination")]
    [ReadPermission(PermissionKeys.Cphysicalexamination.View)]
    public sealed class CphysicalexaminationRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), NotNull]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
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

        [ForeignKey("[dbo].[LkpPhysExamGroup]", "GroupId"), LeftJoin("jPhysExamGroup")]
        public Int32? GroupId
        {
            get { return Fields.GroupId[this]; }
            set { Fields.GroupId[this] = value; }
        }

        [ForeignKey("[dbo].[lkpPhysExams]", "PhysExamId"), LeftJoin("jPhysExam")]
        public Int32? PhysExamId
        {
            get { return Fields.PhysExamId[this]; }
            set { Fields.PhysExamId[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SDateOfVisit; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CphysicalexaminationRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field Mrid;
            public Int64Field VisitId;
            public DateTimeField DateOfVisit;
            public StringField SDateOfVisit;
            public Int32Field GroupId;
            public Int32Field PhysExamId;
            public StringField Note;

            public StringField PhysExamName;
            public StringField PhysExamGroup;
        }
    }
}
