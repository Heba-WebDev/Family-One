package cl.chile.somosafac.mapper;

import cl.chile.somosafac.DTO.NotaDTO;
import cl.chile.somosafac.entity.NotaEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-09-19T11:40:27-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class NotaMapperImpl implements NotaMapper {

    @Override
    public NotaDTO toDto(NotaEntity nota) {
        if ( nota == null ) {
            return null;
        }

        NotaDTO notaDTO = new NotaDTO();

        return notaDTO;
    }

    @Override
    public NotaEntity toEntity(NotaDTO notaDTO) {
        if ( notaDTO == null ) {
            return null;
        }

        NotaEntity notaEntity = new NotaEntity();

        return notaEntity;
    }
}
