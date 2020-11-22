
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Crecommendations]")]
    [DisplayName("Diet"), InstanceName("Diet")]
    [ReadPermission(PermissionKeys.Crecommendations.View)]
    public sealed class CrecommendationsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), NotNull]
        public Int64? RecommandationId
        {
            get { return Fields.RecommandationId[this]; }
            set { Fields.RecommandationId[this] = value; }
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

        [DisplayName("Recom"), NotNull, ForeignKey("[dbo].[lkpRecommands]", "RecomId"), LeftJoin("jRecom"), TextualField("RecomRecommandName")]
        public Int32? RecomId
        {
            get { return Fields.RecomId[this]; }
            set { Fields.RecomId[this] = value; }
        }


        [DisplayName("Note"), NotNull, QuickSearch]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Visit Date (m)"), NotNull]
        public DateTime? DateOfVisit
        {
            get { return Fields.DateOfVisit[this]; }
            set { Fields.DateOfVisit[this] = value; }
        }

        [DisplayName("Visit Date (s)"), Size(50)]
        public String SDateOfVisit
        {
            get { return Fields.SDateOfVisit[this]; }
            set { Fields.SDateOfVisit[this] = value; }
        }
        [DisplayName("Recommendataion"), Expression("jRecom.[RecommandName]")]
        public String RecomRecommandName
        {
            get { return Fields.RecomRecommandName[this]; }
            set { Fields.RecomRecommandName[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.RecommandationId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Note; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CrecommendationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field RecommandationId;
            public Int64Field Mrid;
            public Int64Field VisitId;
            public Int32Field RecomId;
            public StringField Note;
            public DateTimeField DateOfVisit;
            public StringField SDateOfVisit;

            public StringField RecomRecommandName;
        }
    }
}
