
namespace EMR.OPD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("OPD"), TableName("[dbo].[Recommedations]")]
    [DisplayName("Recommedations"), InstanceName("Recommedations")]
    [ReadPermission(PermissionKeys.Recommedations.View)]
    [ModifyPermission(PermissionKeys.Recommedations.Update)]
    [InsertPermission(PermissionKeys.Recommedations.Insert)]
    [DeletePermission(PermissionKeys.Recommedations.Delete)]
    public sealed class RecommedationsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Recommandation Id"), Identity]
        public Int64? RecommandationId
        {
            get { return Fields.RecommandationId[this]; }
            set { Fields.RecommandationId[this] = value; }
        }

        [DisplayName("Recom"),NotNull, ForeignKey("[dbo].[lkpRecommands]", "RecomId"), LeftJoin("jRecom"), TextualField("RecomRecommandName")]
        public Int32? RecomId
        {
            get { return Fields.RecomId[this]; }
            set { Fields.RecomId[this] = value; }
        }

        [DisplayName("Visit"), ForeignKey("[dbo].[Visits]", "VisitId"), LeftJoin("jVisit"), TextualField("VisitPhoneNumber")]
        public Int64? VisitId
        {
            get { return Fields.VisitId[this]; }
            set { Fields.VisitId[this] = value; }
        }

        [DisplayName("Note"), NotNull, QuickSearch]
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

        [DisplayName("Recommendataion"), Expression("jRecom.[RecommandName]")]
        public String RecomRecommandName
        {
            get { return Fields.RecomRecommandName[this]; }
            set { Fields.RecomRecommandName[this] = value; }
        }

        [DisplayName("Mrid"), Expression("jVisit.[MRID]")]
        public Int64? VisitMrid
        {
            get { return Fields.VisitMrid[this]; }
            set { Fields.VisitMrid[this] = value; }
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

        public RecommedationsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field RecommandationId;
            public Int32Field RecomId;
            public Int64Field VisitId;
            public StringField Note;
            public Int32Field UserId;
            public DateTimeField Updated;

            public StringField RecomRecommandName;

            public Int64Field VisitMrid;
        }
    }
}
