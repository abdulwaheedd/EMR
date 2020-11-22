
namespace EMR.Imaging.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Imaging"), TableName("[dbo].[ImgImagings]")]
    [DisplayName("Img Imagings"), InstanceName("Img Imagings")]
    [ReadPermission(PermissionKeys.ImgImagings.View)]
    [ModifyPermission(PermissionKeys.ImgImagings.Update)]
    [InsertPermission(PermissionKeys.ImgImagings.Insert)]
    [DeletePermission(PermissionKeys.ImgImagings.Delete)]
    public sealed class ImgImagingsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }


        [DisplayName("Visit Id"), Column("VisitId"), NotNull, ForeignKey("[dbo].[Visits]", "VisitId"), LeftJoin("jVisit")]
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
        [MultipleImageUploadEditor(FilenameFormat = "TestImages/|MRN|/|VisitId|/|ImagingId|/{4}")]
        [DisplayName("Image Url"), NotNull, Size(300), QuickSearch]
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

        [DisplayName("Imaging Name"), Expression("jImaging.[ImagingName]"), QuickSearch]
        public String ImagingName
        {
            get { return Fields.ImagingName[this]; }
            set { Fields.ImagingName[this] = value; }
        }

        [Expression("jVisit.[MRID]"), ForeignKey("Outpatients", "MRID"), LeftJoin("myr"), LookupInclude, QuickSearch]
        public Int64? MRID
        {
            get { return Fields.MRID[this]; }
            set { Fields.MRID[this] = value; }
        }

        [Expression("myr.[MRN]")]
        public String MRN
        {
            get { return Fields.MRN[this]; }
            set { Fields.MRN[this] = value; }
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

        public ImgImagingsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int64Field VisitId;
            public Int32Field ImagingId;
            public StringField TestImage;
            public StringField Note;
            public Int32Field UserId;
            public DateTimeField Updated;


            public Int64Field MRID;
            public StringField ImagingName;
            public StringField MRN;
        }
    }
}
