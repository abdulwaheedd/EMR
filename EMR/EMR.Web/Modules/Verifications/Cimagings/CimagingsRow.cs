
namespace EMR.Verifications.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Verifications"), TableName("[dbo].[Cimagings]")]
    [DisplayName("Cimagings"), InstanceName("Cimagings")]
    [ReadPermission(PermissionKeys.Cimagings.View)]
    public sealed class CimagingsRow : Row, IIdRow, INameRow
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

        [DisplayName("Imaging"), NotNull, ForeignKey("[dbo].[LkpImaging]", "ImagingId"), LeftJoin("jImaging")]
        public Int32? ImagingId
        {
            get { return Fields.ImagingId[this]; }
            set { Fields.ImagingId[this] = value; }
        }
        [MultipleImageUploadEditor(FilenameFormat = "|VisitId|/|ImagingId|/{4}")]
        [DisplayName("Test Image"), Size(500), QuickSearch]
        public String TestImage
        {
            get { return Fields.TestImage[this]; }
            set { Fields.TestImage[this] = value; }
        }

        [DisplayName("Note"), Size(500)]
        public String Note
        {
            get { return Fields.Note[this]; }
            set { Fields.Note[this] = value; }
        }

        [DisplayName("Imaging Name"), Expression("jImaging.[ImagingName]"), QuickSearch]
        public String ImagingName
        {
            get { return Fields.ImagingName[this]; }
            set { Fields.ImagingName[this] = value; }
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
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TestImage; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CimagingsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field Mrid;
            public Int64Field VisitId;
            public Int32Field ImagingId;
            public StringField TestImage;
            public StringField Note;

            public DateTimeField DateOfVisit;
            public StringField SDateOfVisit;

            public StringField ImagingName;
        }
    }
}
