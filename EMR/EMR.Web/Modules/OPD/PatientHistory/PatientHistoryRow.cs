
namespace EMR.OPD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("OPD"), TableName("[dbo].[PatientHistory]")]
    [DisplayName("Patient History"), InstanceName("History")]
    [ReadPermission(PermissionKeys.PatientHistory.View)]
    [ModifyPermission(PermissionKeys.PatientHistory.Update)]
    [InsertPermission(PermissionKeys.PatientHistory.Insert)]
    [DeletePermission(PermissionKeys.PatientHistory.Delete)]
    public sealed class PatientHistoryRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Visit"), NotNull, ForeignKey("[dbo].[Visits]", "VisitId"), LeftJoin("jVisit")]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("History"), NotNull, ForeignKey("[dbo].[lkpHistory]", "HistoryId"), LeftJoin("jHistory")]
        public Int32? HistoryId
        {
            get { return Fields.HistoryId[this]; }
            set { Fields.HistoryId[this] = value; }
        }

        [DisplayName("Note"),NotNull, QuickSearch]
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
            get { return Fields.Note; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PatientHistoryRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field VisitId;
            public Int32Field HistoryId;
            public StringField Note;
            public Int32Field UserId;
            public DateTimeField Updated;

            public StringField HistoryName;
        }
    }
}
