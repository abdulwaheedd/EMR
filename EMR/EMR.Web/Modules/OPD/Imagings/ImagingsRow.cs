
namespace EMR.OPD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("OPD"), TableName("[dbo].[Imagings]")]
    [DisplayName("Imagings"), InstanceName("Imaging")]
    [ReadPermission(PermissionKeys.Imagings.View)]
    [ModifyPermission(PermissionKeys.Imagings.Update)]
    [InsertPermission(PermissionKeys.Imagings.Insert)]
    [DeletePermission(PermissionKeys.Imagings.Delete)]
    public sealed class ImagingsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int64? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
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
        [DisplayName("Image Url"),NotNull, Size(300), QuickSearch]
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
        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.TestImage; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ImagingsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field VisitId;
            public Int32Field ImagingId;
            public StringField TestImage;
            public StringField Note;
            public Int32Field UserId;
            public DateTimeField Updated;

            public StringField ImagingName;
        }
    }
}
