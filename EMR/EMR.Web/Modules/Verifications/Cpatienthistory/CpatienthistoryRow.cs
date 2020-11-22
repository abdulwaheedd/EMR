
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Cpatienthistory]")]
    [DisplayName("History"), InstanceName("History")]
    [ReadPermission(PermissionKeys.Cpatienthistory.View)]
    public sealed class CpatienthistoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), NotNull,PrimaryKey]
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

        [DisplayName("History"), NotNull, ForeignKey("[dbo].[lkpHistory]", "HistoryId"), LeftJoin("jHistory")]
        public Int32? HistoryId
        {
            get { return Fields.HistoryId[this]; }
            set { Fields.HistoryId[this] = value; }
        }

        [DisplayName("Note")]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("History"), QuickSearch, Expression("jHistory.[HistoryName]")]
        public string HistoryName
        {
            get { return Fields.HistoryName[this]; }
            set { Fields.HistoryName[this] = value; }
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

        public CpatienthistoryRow()
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
            public Int32Field HistoryId;
            public StringField Note;

            public StringField HistoryName;
        }
    }
}
